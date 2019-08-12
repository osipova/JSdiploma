'use strict';

import popup from './modules/popup';
import sentenceBtn from './modules/sentenceBtn';
import questionsPanel from './modules/questionsPanel';
import constructor from './modules/constructor';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';

popup();
sentenceBtn();
questionsPanel();
constructor();
sendForm(calculator());