import { Component } from '@angular/core';
import { AddComponentService } from 'src/app/services/add-component.service';
import { ResourceType } from 'src/app/Models/Codegen/GCP/ResourceType';
import { ResourceProperties } from 'src/app/Models/Codegen/GCP/ResourceProperties';
import { VisualResource } from './VisualResource';
import { ProviderType } from 'src/app/enum/ProviderType';
import { DynamicUIProps } from '../resource-config/resource-config.component';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  providerType = ProviderType;
  viewAWS = false;
  viewGCP = false;
  viewOnPremise = false;

  public readonly VisualResources = new Map<ProviderType, VisualResource[]>([
    [
      ProviderType.AWS,
      [
        // new VisualResource(
        //   'Lambda Function',
        //   ResourceType.Lambda,
        //   '../../../assets/Arch_Amazon-' +
        //     ResourceType[ResourceType.Lambda] +
        //     '_64.png'
        // ),
        // new VisualResource(
        //   'EC2 Instance',
        //   ResourceType.EC2,
        //   '../../../assets/Arch_Amazon-' +
        //     ResourceType[ResourceType.EC2] +
        //     '_64.png'
        // ),
        // new VisualResource(
        //   'S3 Bucket',
        //   ResourceType.Simple_Storage_Service,
        //   '../../../assets/Arch_Amazon-' +
        //     ResourceType[ResourceType.Simple_Storage_Service] +
        //     '_64.png'
        // ),
      ],
    ],
    [
      ProviderType.GCP,
      [
        new VisualResource(
          'Compute Instance',
          ResourceType.COMPUTE_INSTANCE,
          '../../../assets/GCPIcons/compute_engine.png'
        ),

        new VisualResource(
          'VPC',
          ResourceType.COMPUTE_NETWORK,
          '../../../assets/GCPIcons/virtual_private_cloud.png'
        ),
        new VisualResource(
          'Compute Subnet',
          ResourceType.COMPUTE_SUBNETWORK,
          '../../../assets/GCPIcons/network_topology.png'
        ),
        new VisualResource(
          'Cloud Storage',
          ResourceType.STORAGE_BUCKET,
          '../../../assets/GCPIcons/cloud_storage.png'
        ),
        new VisualResource(
          'Cloud Function',
          ResourceType.CLOUDFUNCTIONS_FUNCTION,
          '../../../assets/GCPIcons/cloud_functions.png'
        ),
        new VisualResource(
          'Cloud SQL',
          ResourceType.SQL_DATABASEINSTANCE,
          '../../../assets/GCPIcons/cloud_sql.png'
        ),
        new VisualResource(
          'Load Balancer',
          ResourceType.COMPUTE_FORWARDINGRULE,
          '../../../assets/GCPIcons/cloud_load_balancing.png'
        ),
      ],
    ],
  ]);

  constructor(private _addComponentService: AddComponentService) {}
  addComponent(resource: VisualResource) {
    //console.log(componentName);
    this._addComponentService.components.next(resource);
  }

  toggleAWS() {
    this.viewAWS = !this.viewAWS;
  }
}
