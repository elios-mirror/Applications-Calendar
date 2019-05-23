import Sdk from 'elios-sdk'

var moment = require('moment');

export default class Calendar {
  name: string = '';
  installId: string = '';

  requireVersion: string = '0.0.1';
  showOnStart: boolean = true;
  selectedDisplay: string = '3';

  widget: any;
  it: any;
  sdk: Sdk;

  state = {
    date: new Date(),
  }

  constructor() {
    console.log('Calendar application constructor.');
    this.sdk = new Sdk();
  }

  start() {
    console.log('Calendar application started.');
    this.widget = this.sdk.createWidget();

    let htmlString = "<div style=\"width:245px\"><div style=\"width:245px;text-align:center;padding-top:5px;border:1px solid white;height:35px;\">" + moment().month(moment().month()).format('MMMM') + " " + moment().year() + "</div>"

    for (var i = 0; i < moment().daysInMonth(); i++) {
      if (i + 1 != moment().date())
        htmlString += "<div style=\"text-align:center;padding-top:5px;float:left;border:1px solid white;height:35px;width:35px\">" + (i + 1).toString() + "</div>";
      else
        htmlString += "<div style=\"color:black;background-color:white;text-align:center;padding-top:5px;float:left;border:1px solid white;height:35px;width:35px\">" + (i + 1).toString() + "</div>";
    }
    htmlString += "</div>";

    this.widget.html(htmlString);
  }
}

new Calendar().start();