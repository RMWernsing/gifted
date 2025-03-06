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
      <div class="col-4">
        <div class="card m-3 border border-indigo border-4">
          <img
            src="${this.url}"
            alt="doenst matter right now">
          <p class="text-center pt-2">
            ${this.tag}
          </p>
        </div>
      </div>
    `
  }
}