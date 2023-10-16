import { baseUrl } from "../../config";

import axios from "axios";

export default function Logout() {
  axios
    .post(
      `${baseUrl}/auth/signout`,
{},
      { withCredentials: true }
    )
    .then(async (resp) => {

    });
}
