const props: string[] = ["name", "email", "tel", "address", "icon"];
const opts: { multiple: boolean } = { multiple: true };
const supported: boolean =
  "contacts" in navigator && "ContactsManager" in window;

async function getContacts(): Promise<void> {
  let contacts: any[] = [];
  if (supported) {
    contacts = await (navigator as any).contacts.select(props, opts);
  }
  console.log(contacts);
}

const btn: HTMLElement | null = document.getElementById("contacts");
if (btn) {
  btn.addEventListener("click", getContacts);
}
