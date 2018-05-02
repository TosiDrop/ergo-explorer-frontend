import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { AppState } from '../../store/app.store';

const messages = {
  en: require('../../locales/en.json'),
  ru: require('../../locales/ru.json')
};

function mapStateToProps (state: AppState): any {
  const { locale } = state.settings;
  
  return {
    locale,
    messages: messages[locale]
  };
}

export const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);