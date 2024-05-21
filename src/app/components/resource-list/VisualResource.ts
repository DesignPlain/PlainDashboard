import { ResourceType } from 'src/app/Models/Codegen/GCP/ResourceType';

export class VisualResource {
  constructor(
    public Titile: string,
    public ResourceType: ResourceType,
    public iconSrc: string
  ) {}
}
