import { Namespace } from '@app-types';

export interface ReportNamespaces {
  addUsedNamespaces(namespaces: Namespace[]): void;
  getUsedNamespaces(): string[];
}
