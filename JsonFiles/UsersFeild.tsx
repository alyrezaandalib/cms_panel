export const FormData = [
  { label: "First name:", name: "first_name", id: "first_name" },
  { label: "Last name:", name: "last_name", id: "last_name" },
  { label: "User name (Unique):", name: "usr_name", id: "usr_name" },
  {
    label: "Password:",
    type: "password",
    name: "passwd",
    id: "passwd",
  },
  { label: "State:", name: "state", id: "state" },
  { label: "Town:", name: "town", id: "town" },
  { label: "Address:", name: "address", id: "address", as: "textarea" },
  { label: "Email (Unique):", type: "email", name: "email", id: "email" },
  {
    label: "Phone number (Unique):",
    name: "phone_number",
    id: "phone_number",
  },
  { label: "Birthday:", name: "birthday", id: "birthday" },
];

export const Rules = [
  {
    value: "subscriber",
    label: "Subscriber",
  },
  {
    value: "contributor",
    label: "contributor",
  },
  {
    value: "author",
    label: "Author",
  },
  {
    value: "administrator",
    label: "Administrator",
  },
  {
    value: "editor",
    label: "Editor",
  },
];
