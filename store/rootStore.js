/**
 * Import all your stores
 */
import AuthStore from '../Screens/Auth/Store/AuthStore';
import ProfileStore from '../Screens/Profile/Store/ProfileStore';
import DashboardStore from '../Screens/Dashboard/Store/DashboardStore';

/**
 * Root Store Class with
 */
class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.profileStore = new ProfileStore(this);
    this.dashboardStore = new DashboardStore(this);
  }
}

export default RootStore;
