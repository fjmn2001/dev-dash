import { render } from "@testing-library/react";

import { githubApiResponses } from "../src/github_api_responses";
import { GitHubApiGitHubRepositoryRepository } from "../src/infrastructure/GitHubApiGitHubRepositoryRepository";
import { Dashboard } from "../src/sections/dashboard/Dashboard";

jest.mock("../src/infrastructure/GitHubApiGitHubRepositoryRepository");
const mockRepository =
	GitHubApiGitHubRepositoryRepository as jest.Mock<GitHubApiGitHubRepositoryRepository>;

describe("Dashboard section", () => {
	it("should show all widgets", async () => {
		mockRepository.mockImplementationOnce(() => {
			return {
				async search() {
					return Promise.resolve(githubApiResponses);
				},
			} as unknown as GitHubApiGitHubRepositoryRepository;
		});
		render(<Dashboard />);
	});
});
