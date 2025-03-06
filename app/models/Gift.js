export class Gift {
  constructor(data) {
    this.id = data.id
    this.opened = data.opened
    this.profileIdsOpened = data.profileIdsOpened
    this.profilesOpened = data.profilesOpened
    this.url = data.url
    this.tag = data.tag
  }

  get giftTemplate() {
    return `
      <div role="button" onclick="app.giftsController.openGift('${this.id}')" class="col-4">
        <div class="card m-3 border border-indigo border-4 shadow">
          <img
            src="${this.url}"
            alt="a gif captioned: ${this.tag}">
          <p class="text-center pt-2 px-3">
            ${this.tag}
          </p>
        </div>
      </div>
    `
  }
}