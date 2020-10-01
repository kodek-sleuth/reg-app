import {decorate, observable, action} from 'mobx';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

// Create Auth store
class AuthStore {
  signedIn = false;
  id = Date.now();
  password = '';
  email = '';
  submit = false;
  errorMessage = '';
  successMessage = '';
  loading = false;
  name = '';
  user = {};
  authToken = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  login = async () => {
    try {
      this.loading = true;
      if (!this.email || !this.password) {
        this.loading = false;
        this.errorMessage = 'Please provide your email and password';
      }
      await auth().signInWithEmailAndPassword(this.email, this.password);
      this.successMessage = 'Successfully logged in';
      // Store token in async Storage
      await AsyncStorage.setItem('signedIn', JSON.stringify(true));
      this.loading = false;
    } catch (error) {
      // console.log('Error in server', error);
      this.loading = false;
      switch (true) {
        case error.code === 'auth/user-disabled':
          this.errorMessage = 'Failed to signup, account might be disabled';
          break;
        case error.code === 'auth/invalid-email':
          this.errorMessage = 'Please enter a valid email';
          break;
        case error.code === 'auth/user-not-found':
          this.errorMessage = 'User not found, signup now to login';
          break;
        case error.code === 'auth/wrong-password':
          this.errorMessage = 'Wrong email or password';
          break;
        default:
          this.errorMessage = 'Server failed to respond, try again later';
          break;
      }
    }
  };

  signup = async () => {
    try {
      this.loading = true;
      this.email = this.email;
      this.password = this.password;
      if (!this.email || !this.password || !this.name) {
        this.loading = false;
        this.errorMessage = 'name, email and password are required';
      }
      // Create user
      const response = await auth().createUserWithEmailAndPassword(
        this.email,
        this.password,
      );
      if (response) {
        this.loading = false;
        this.successMessage = 'Successfully created account';
      }
    } catch (error) {
      this.loading = false;
      switch (true) {
        case error.code === 'auth/email-already-in-use':
          this.errorMessage = 'Email already in use, try a different one';
          break;
        case error.code === 'auth/invalid-email':
          this.errorMessage = 'Please enter a valid email';
          break;
        case error.code === 'auth/operation-not-allowed':
          this.errorMessage = 'Operation not allowed, try again later';
          break;
        case error.code === 'auth/weak-password':
          this.errorMessage =
            'Password is not strong enough, include number, uppercase and special character';
          break;
        default:
          this.errorMessage = 'Server failed to respond, try again later';
          break;
      }
    }
  };

  updatePassword = (password) => {
    this.password = password;
  };

  setUser = (user) => {
    this.user = user;
  };

  setToken = (token) => {
    this.authToken = token;
  };

  updateName = (name) => {
    this.name = name;
  };

  updateEmail = (email) => {
    this.email = email;
  };

  signInUser = () => {
    this.signedIn = true;
  };

  clearAuthState = () => {
    this.password = '';
    this.email = '';
    this.submit = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.loading = false;
    this.name = '';
    this.user = {};
    this.authToken = '';
  };
}

decorate(AuthStore, {
  id: observable,
  password: observable,
  email: observable,
  submit: observable,
  errorMessage: observable,
  successMessage: observable,
  loading: observable,
  name: observable,
  user: observable,
  authToken: observable,
  signedIn: observable,
  signInUser: action,
  login: action,
  signup: action,
  updatePassword: action,
  setUser: action,
  updateEmail: action,
  updateName: action,
  setToken: action,
  clearAuthState: action,
});

export default AuthStore;
