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
    <p>${this.tag}</p>
    `
  }
}