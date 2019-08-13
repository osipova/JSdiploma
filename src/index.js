'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'es6-promise';

import elementClosest from 'element-closest';
elementClosest(window);

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