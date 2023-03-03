export const { cookie } = document;

export const setCookie = (cname: string, cvalue: any, exdays?: any) => {
  if (!exdays) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  } else {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
};
export const getCookie = (cname: string) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
export const checkToken = () => {
  let token = getCookie("token");
  if (token !== "") {
    return true;
  } else {
    return false;
  }
};
export const clearToken = () => {
  document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
