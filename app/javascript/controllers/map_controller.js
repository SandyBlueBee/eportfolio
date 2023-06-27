import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map"
export default class extends Controller {
static targets = ["blank", "usa", "france", "germany", "russia", "greece"]

  connect() {
    console.log("map stimulus controller is here!")
  }

  showUSA() {
    console.log(this.usaTarget)
    if (this.usaTarget.style.display === "none") {
      this.usaTarget.style.display = "block";
      this.blankTarget.style.display = "none";
    } else {
      this.usaTarget.style.display = "none";
      this.blankTarget.style.display = "flex";
    }
    this.franceTarget.style.display = "none";
    this.germanyTarget.style.display = "none";
    this.russiaTarget.style.display = "none";
    this.greeceTarget.style.display = "none";
  }

  showFrance() {
    if (this.franceTarget.style.display === "none") {
      this.franceTarget.style.display = "block";
      this.blankTarget.style.display = "none";
    } else {
      this.franceTarget.style.display = "none";
      this.blankTarget.style.display = "flex";
    }
    this.usaTarget.style.display = "none";
    this.germanyTarget.style.display = "none";
    this.russiaTarget.style.display = "none";
    this.greeceTarget.style.display = "none";
  }

  showGermany() {
    if (this.germanyTarget.style.display === "none") {
      this.germanyTarget.style.display = "block";
      this.blankTarget.style.display = "none";
    } else {
      this.germanyTarget.style.display = "none";
      this.blankTarget.style.display = "flex";
    }
    this.usaTarget.style.display = "none";
    this.franceTarget.style.display = "none";
    this.russiaTarget.style.display = "none";
    this.greeceTarget.style.display = "none";
  }

  showRussia() {
    if (this.russiaTarget.style.display === "none") {
      this.russiaTarget.style.display = "block";
      this.blankTarget.style.display = "none";
    } else {
      this.russiaTarget.style.display = "none";
      this.blankTarget.style.display = "flex";
    }
    this.usaTarget.style.display = "none";
    this.franceTarget.style.display = "none";
    this.germanyTarget.style.display = "none";
    this.greeceTarget.style.display = "none";
  }

  showGreece() {
    if (this.greeceTarget.style.display === "none") {
      this.greeceTarget.style.display = "block";
      this.blankTarget.style.display = "none";
    } else {
      this.greeceTarget.style.display = "none";
      this.blankTarget.style.display = "flex";
    }
    this.usaTarget.style.display = "none";
    this.franceTarget.style.display = "none";
    this.germanyTarget.style.display = "none";
    this.russiaTarget.style.display = "none";
  }
}
