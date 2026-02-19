import { GcmContextCode } from '@kato-lee/utilities/types';

export type AccentType = 'amber' | 'blue' | 'green' | 'red' | 'teal';

export interface NavRoute {
  id: string;
  label: string;
  icon: string;
  description?: string;
  authorities?: string[];
  disableOnContexts?: GcmContextCode[];
  forceDisabledContent?: boolean;
  href?: string;
  wasDisabled?: boolean;
}

export interface NavSubmodule {
  id: string;
  label: string;
  icon: string;
  accent: AccentType;
  description?: string;
  authorities?: string[];
  disableOnContexts?: GcmContextCode[];
  forceDisabledContent?: boolean;
  routes: NavRoute[];
  wasDisabled?: boolean;
}

export interface NavModule {
  id: string;
  label: string;
  icon: string;
  accent: AccentType;
  description?: string;
  authorities?: string[];
  disableOnContexts?: GcmContextCode[];
  forceDisabledContent?: boolean;
  submodules: NavSubmodule[];
  wasDisabled?: boolean;
}

export interface DashboardConfig {
  enterpriseName: string;
  contextCode: string;
  contextForHumans: string;
  userFullName: string;
  userFirstName: string;
  userInitials: string;
  roleName: string;
  authorities: string[];
}
