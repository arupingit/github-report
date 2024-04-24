import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repo";
import { User } from "./User";
import * as _ from "lodash";

if (process.argv.length < 3) {
  console.log("Please enter the github username for details");
} else {
  let username = process.argv[2];
  let svc = new GithubApiService();
  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);

      user.repos = _.take(sortedRepos, 1);
      console.log(user);
    });
  });
}
