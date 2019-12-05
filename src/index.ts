var moment = require('moment');
const elios_sdk = require('elios-sdk');

const sdk = new elios_sdk.default();

export default class Calendar {
  name: string = '';
  installId: string = '';

  requireVersion: string = '0.0.1';
  showOnStart: boolean = true;

  widget: any;
  it: any;

  state = { date: new Date() }

  constructor() {
    console.log('Calendar application constructor.');
  }

  render() {
    let htmlString = "<div style=\"width:245px\"><div style=\"width:245px;text-align:center;padding-top:5px;border:1px solid white;height:35px;\">" + moment().month(moment().month()).format('MMMM') + " " + moment().year() + "</div>"

    for (var i = 0; i < moment().daysInMonth() ; i++) {
      if (i + 1 != moment().date())
      htmlString += "<div style=\"text-align:center;padding-top:5px;float:left;border:1px solid white;height:35px;width:35px\">" + (i + 1).toString() + "</div>";
      else
      htmlString += "<div style=\"color:black;background-color:white;text-align:center;padding-top:5px;float:left;border:1px solid white;height:35px;width:35px\">" + (i + 1).toString() + "</div>";
    }
    htmlString += "</div>";

    this.widget.html(htmlString);
  }

  start() {
    console.log('Calendar application started.');

    this.widget = sdk.createWidget();

    this.render();

    setInterval(() => {
      this.render();
    }, 3600000);
  }
}

const calendar = new Calendar();

calendar.start();
