export interface RepositoryDockerConfig {
  // The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
  ImmutableTags?: boolean;
}
