import {action, decorate, observable} from 'mobx';
import firestore from '@react-native-firebase/firestore';

// Create Auth store
class ProfileStore {
  id = Date.now().toString();
  errorMessage = '';
  successMessage = '';
  account = '';
  phoneNumber = '';
  loading = false;
  accounts = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  updateAccount = (value) => {
    this.account = value;
  };

  updatePhoneNumber = (value) => {
    this.phoneNumber = value;
  };

  createAccount = async () => {
    this.errorMessage = '';
    this.successMessage = '';

    try {
      this.loading = true;
      if (!this.account || !this.phoneNumber) {
        this.errorMessage = 'Please provide account and phone number';
        return false;
      }

      if (isNaN(this.account) === true) {
        this.errorMessage =
          'Please enter a valid account number e.g 4949595...';
        this.loading = false;
        return false;
      }

      if (isNaN(this.phoneNumber) === true) {
        this.errorMessage = 'Please enter a valid phone number e.g 7488488';
        this.loading = false;
        return false;
      }

      const payload = {
        account: this.account,
        units: 0,
        holder: {
          uid: this.rootStore.authStore.user.uid,
          email: this.rootStore.authStore.user.email,
          telephone: this.phoneNumber,
        },
        timestamp: new Date().toString(),
      };
      await firestore().collection('Accounts').doc(this.account).set(payload);
      this.successMessage = 'Successfully created account';
      this.loading = false;
    } catch (error) {
      console.log('Error', error);
      this.errorMessage = 'Failed to create account, try again later';
    }
  };

  fetchCashPowerAccounts = async () => {
    try {
      const accountsRef = firestore().collection('Accounts');
      const snapshot = await accountsRef.get();

      if (snapshot.empty) {
        // this.errorMessage = 'Failed to fetch accounts';
      }

      let tempArray = [];
      snapshot.forEach((doc) => {
        if (doc.data().holder.email === this.rootStore.authStore.user.email) {
          tempArray.push(doc.data());
        }
      });
      this.accounts = [...this.accounts, ...tempArray];
    } catch (error) {
      console.log('error fetching accounts', error);
      return error;
    }
  };

  clearAuthState = () => {
    this.phoneNumber = '';
    this.account = '';
  };
}

decorate(ProfileStore, {
  errorMessage: observable,
  successMessage: observable,
  loading: observable,
  phoneNumber: observable,
  account: observable,
  createAccount: action,
  updateAccount: action,
  updatePhoneNumber: action,
  clearAuthState: action,
  fetchCashPowerAccounts: action,
  accounts: observable,
});

export default ProfileStore;
