/* eslint-disable prettier/prettier */
import {action, decorate, observable} from 'mobx';
import firestore from '@react-native-firebase/firestore';

// Create Auth store
class DashboardStore {
  errorMessage = '';
  successMessage = '';
  loading = false;
  amount = '333333';
  account = '475759949449484';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  updateAmount = (value) => {
    this.amount = value;
  };

  updateAccount = (value) => {
    this.account = value;
  };

  clearAuthState = () => {};

  fetchDocument = async () => {
    try {
      const tempArray = [];
      const snapshot = await firestore()
        .collection('Accounts')
        .where('account', '==', this.account)
        .get();

      if (snapshot.empty) {
        return 'not found';
      }

      snapshot.forEach((doc) => {
        tempArray.push(doc.data());
      });

      if (tempArray.length < 1) {
        return 'not found';
      }

      return tempArray[0];
    } catch (error) {
      return error;
    }
  };

  sendCashPower = async () => {
    this.errorMessage = '';
    this.successMessage = '';

    try {
      this.loading = true;
      if (!this.account || !this.amount) {
        this.errorMessage = 'Please provide account and amount to send';
        this.loading = false;
        return false;
      }

      if (isNaN(this.account) === true) {
        this.errorMessage =
          'Please enter a valid account number e.g 4949595...';
        this.loading = false;
        return false;
      }

      if (isNaN(this.amount) === true) {
        this.errorMessage = 'Please enter a valid amount';
        this.loading = false;
        return false;
      }

      if (this.amount < 1000) {
        this.errorMessage = 'Sending amount should be greater than 999';
        this.loading = false;
        return false;
      }

      // Verify that document exists
      const cashPowerAccount = await this.fetchDocument();
      console.log('cashPowerAccount', cashPowerAccount);
      if (cashPowerAccount == 'not found') {
        this.errorMessage = 'Cash power account not found';
        this.loading = false;
        return false;
      }

      if (!cashPowerAccount) {
        this.errorMessage = 'Cash power account not found';
        return false;
      }

      console.log('cashPowerAccount', cashPowerAccount);

      await firestore()
        .collection('Accounts')
        .doc(this.account)
        .update({units: cashPowerAccount.units + (this.amount / 1000)});
      this.successMessage = `Successfully sent cash power to ${cashPowerAccount.holder.telephone} account`;
      this.loading = false;
      this.amount = '';
      this.account = '';
    } catch (error) {
      console.log('Error', error);
      if (error.code === 'firestore/not-found') {
        this.errorMessage = 'Cash power account not found';
        return false;
      }
      this.errorMessage = 'Failed to send cash power, try again later';
      return false;
    }
  };
}

decorate(DashboardStore, {
  sendCashPower: action,
  clearAuthState: action,
  amount: observable,
  account: observable,
  loading: observable,
});

export default DashboardStore;
