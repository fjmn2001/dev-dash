import { useEffect, useState } from "react";

import { GitHubRepository } from "../../domain/GitHubRepository";
import { GitHubRepositoryRepository } from "../../domain/GitHubRepositoryRepository";

export const useGitHubRepository = (
	repository: GitHubRepositoryRepository,
	repositoryUrls: string[]
): { repositoryData: GitHubRepository[] } => {
	const [repositoryData, setRepositoryData] = useState<GitHubRepository[]>([]);

	useEffect(() => {
		void repository.search(repositoryUrls).then((repositoryData) => {
			setRepositoryData(repositoryData);
		});
	}, [repository, repositoryUrls]);

	return {
		repositoryData,
	};
};
