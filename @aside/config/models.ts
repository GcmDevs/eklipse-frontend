export interface NavRoute {
  id: string;
  label: string;
  description: string;
  icon: string;
  iconType?: 'material' | 'lucide';
  authorities?: string[];
  href?: string;
}

export interface NavSubmodule {
  id: string;
  label: string;
  description: string;
  accent: string;
  icon: string;
  iconType?: 'material' | 'lucide';
  authorities?: string[];
  routes: NavRoute[];
}

export interface NavModule {
  id: string;
  label: string;
  description: string;
  accent: string;
  icon: string;
  iconType?: 'material' | 'lucide';
  authorities?: string[];
  submodules: NavSubmodule[];
}
