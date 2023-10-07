import { Outlet, Link, useLoaderData,Form } from "react-router-dom";
import ajax from '@/services'

export async function loader({ params }: { params:{contactId:string} }) {
  console.log(params)
  const contacts = await ajax.contact.getContacts();
  return { contacts: contacts.data };
}

export async function action() {
  const contact = await ajax.contact.createContact();
  return { contact };
}

export default function Layout() {
  const { contacts } = useLoaderData() as {
    contacts: {
      id: number;
      first: string;
      last: string;
      favorite: boolean;
    }[]
  }
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="text"
              // type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </>
  );
}