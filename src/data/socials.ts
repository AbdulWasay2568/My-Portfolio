export interface Social {
  platform: string;
  link: string;
  target: string;
  color: string;
}

export const socialLinks: Social[] = [
  { platform: "LinkedIn", link: "https://www.linkedin.com/in/awd-07-al-saadi-873b22295/", target: "_blank", color: "hover:text-blue-600" },
  { platform: "Github", link: "https://github.com/Awd-07", target: "_blank", color: "hover:text-black" },
  { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/awdarajf9x/", target: "_blank", color: "hover:text-green-600" },
  { platform: "LeetCode", link: "https://leetcode.com/u/Awd_07/", target: "_blank", color: "hover:text-orange-500" }
];
