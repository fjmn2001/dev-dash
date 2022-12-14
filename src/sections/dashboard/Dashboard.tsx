import { config } from "../../devdash_config";
import { GitHubRepositoryRepository } from "../../domain/GitHubRepositoryRepository";
import { ReactComponent as Brand } from "./brand.svg";
import styles from "./Dashboard.module.scss";
import { GitHubRepositoryWidget } from "./GitHubRepositoryWidget";
import { useGitHubRepository } from "./useGitHubRepository";

const repositoryUrls = config.widgets.map((widget) => widget.repository_url);

export function Dashboard({ repository }: { repository: GitHubRepositoryRepository }) {
	const { repositoryData } = useGitHubRepository(repository, repositoryUrls);

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>DevDash_</h1>
				</section>
			</header>
			{repositoryData.length === 0 ? (
				<div className={styles.empty}>
					<span>No hay widgets configurados.</span>
				</div>
			) : (
				<section className={styles.container}>
					{repositoryData.map((repository) => (
						<GitHubRepositoryWidget
							key={`${repository.id.organization}/${repository.id.name}`}
							repository={repository}
						/>
					))}
				</section>
			)}
		</>
	);
}
