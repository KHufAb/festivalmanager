(function initFestivalManager() {
  const config = window.FestivalManagerConfig || {};
  const state = window.FestivalManagerState || {};

  document.documentElement.dataset.app = config.appName || 'Festival Manager';
  document.documentElement.dataset.version = state.version || '0.0.0';
}());
