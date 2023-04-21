import type { BranchStatus } from '../../../types';
import type {
  BranchStatusConfig,
  CreatePRConfig,
  EnsureCommentConfig,
  EnsureCommentRemovalConfig,
  EnsureIssueConfig,
  FindPRConfig,
  Issue,
  MergePRConfig,
  Platform,
  PlatformParams,
  PlatformResult,
  Pr,
  RepoParams,
  RepoResult,
  UpdatePrConfig,
} from '../types';

export const id = 'local_hook';

const platform: Platform = {
  async initPlatform({
    endpoint,
    token,
  }: PlatformParams): Promise<PlatformResult> {
    throw new Error("not implemented");
  },

  async getRawFile(
    fileName: string,
    repoName?: string,
    branchOrTag?: string
  ): Promise<string | null> {
    throw new Error("not implemented");
  },

  async getJsonFile(
    fileName: string,
    repoName?: string,
    branchOrTag?: string
  ): Promise<any | null> {
    throw new Error("not implemented");
  },

  async initRepo({
    repository,
    cloneSubmodules,
    gitUrl,
  }: RepoParams): Promise<RepoResult> {
    throw new Error("not implemented");
  },

  async getRepos(): Promise<string[]> {
    throw new Error("not implemented");
  },

  async setBranchStatus({
    branchName,
    context,
    description,
    state,
    url: target_url,
  }: BranchStatusConfig): Promise<void> {
    throw new Error("not implemented");
  },

  async getBranchStatus(
    branchName: string,
    internalChecksAsSuccess: boolean
  ): Promise<BranchStatus> {
    throw new Error("not implemented");
  },

  async getBranchStatusCheck(
    branchName: string,
    context: string
  ): Promise<BranchStatus | null> {
    throw new Error("not implemented");

  },

  getPrList(): Promise<Pr[]> {
    throw new Error("not implemented");

  },

  async getPr(number: number): Promise<Pr | null> {
    throw new Error("not implemented");
  },

  async findPr({
    branchName,
    prTitle: title,
    state = 'all',
  }: FindPRConfig): Promise<Pr | null> {
    throw new Error("not implemented");
  },

  async createPr({
    sourceBranch,
    targetBranch,
    prTitle,
    prBody: rawBody,
    labels: labelNames,
    platformOptions,
    draftPR,
  }: CreatePRConfig): Promise<Pr> {
    throw new Error("not implemented");

   },

  async updatePr({
    number,
    prTitle,
    prBody: body,
    state,
  }: UpdatePrConfig): Promise<void> {
    throw new Error("not implemented");

  },

  async mergePr({ id, strategy }: MergePRConfig): Promise<boolean> {
    throw new Error("not implemented");

  },

  getIssueList(): Promise<Issue[]> {
    throw new Error("not implemented");

  },

  async getIssue(number: number, useCache = true): Promise<Issue | null> {
    throw new Error("not implemented");

  },

  async findIssue(title: string): Promise<Issue | null> {
    throw new Error("not implemented");

  },

  async ensureIssue({
    title,
    reuseTitle,
    body: content,
    labels: labelNames,
    shouldReOpen,
    once,
  }: EnsureIssueConfig): Promise<'updated' | 'created' | null> {
    throw new Error("not implemented");

  },

  async ensureIssueClosing(title: string): Promise<void> {
    throw new Error("not implemented");

  },

  async deleteLabel(issue: number, labelName: string): Promise<void> {
    throw new Error("not implemented");

  },

  getRepoForceRebase(): Promise<boolean> {
    return Promise.resolve(false);
  },

  async ensureComment({
    number: issue,
    topic,
    content,
  }: EnsureCommentConfig): Promise<boolean> {
    throw new Error("not implemented");

  },

  async ensureCommentRemoval(
    deleteConfig: EnsureCommentRemovalConfig
  ): Promise<void> {
    throw new Error("not implemented");

  },

  async getBranchPr(branchName: string): Promise<Pr | null> {
    throw new Error("not implemented");

  },

  async addAssignees(number: number, assignees: string[]): Promise<void> {
    throw new Error("not implemented");

  },

  async addReviewers(number: number, reviewers: string[]): Promise<void> {
    throw new Error("not implemented");

  },

  massageMarkdown(prBody: string): string {
    throw new Error("not implemented");
  },
};

/* eslint-disable @typescript-eslint/unbound-method */
export const {
  addAssignees,
  addReviewers,
  createPr,
  deleteLabel,
  ensureComment,
  ensureCommentRemoval,
  ensureIssue,
  ensureIssueClosing,
  findIssue,
  findPr,
  getBranchPr,
  getBranchStatus,
  getBranchStatusCheck,
  getIssue,
  getRawFile,
  getJsonFile,
  getIssueList,
  getPr,
  massageMarkdown,
  getPrList,
  getRepoForceRebase,
  getRepos,
  initPlatform,
  initRepo,
  mergePr,
  setBranchStatus,
  updatePr,
} = platform;
