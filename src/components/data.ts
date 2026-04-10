import { Octokit } from "@octokit/core";

export const githubApiKey = process.env.GITHUB_API_KEY;
const octokit = new Octokit({ auth: githubApiKey });

export interface GithubData {
  followers: string;
  stargazers_count: string;
}

export const githubUsername = "wireddev96";

const linkData = {
  linkedIn: "https://www.linkedin.com/in/jordan-lopez-b0b2b5105/ ",
  github: `https://github.com/${githubUsername}/`,
  mail: "jordanlopez.sw@gmail.com",
};

export async function githubData(repoName?: string): Promise<GithubData> {
  const response = await octokit.request(
    `GET /${repoName ? `repos` : "users"}/${githubUsername}${
      repoName ? `/${repoName}` : ""
    }`,
  );
  return response.data;
}

export async function costumGithubRepoData(url): Promise<GithubData> {
  url = url.substring(19);
  const response = await octokit.request(`GET /repos/${url}`);
  return response.data;
}

export default linkData;
