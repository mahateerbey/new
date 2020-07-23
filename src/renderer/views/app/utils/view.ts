import store from '../store';

export const loadURL = (url: string) => {
  const tab = store.tabs.selectedTab;
	const loadURL2 = (url2: string);
  if (!tab) {
    store.tabs.addTab({ url, active: true });
  } else {
    tab.url = url;
	}

	if (tab.url==='http://www.facebook.com' || tab.url==='http://m.facebook.com' || tab.url==='http://facebook.com' || tab.url==='http://fb.com') {
		url2= 'http://www.google.com';
    tab.callViewMethod('loadURL2', url2);
	}
	else {
		tab.callViewMethod('loadURL', url) ;
	}
  
};
