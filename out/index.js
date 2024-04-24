"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const _ = __importStar(require("lodash"));
if (process.argv.length < 3) {
    console.log("Please enter the github username for details");
}
else {
    let username = process.argv[2];
    let svc = new GithubApiService_1.GithubApiService();
    svc.getUserInfo(username, (user) => {
        svc.getRepos(username, (repos) => {
            let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount * -1]);
            user.repos = _.take(sortedRepos, 1);
            console.log(user);
        });
    });
}
