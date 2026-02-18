export interface NavRoute {
  id: string;
  label: string;
  description: string;
  icon: string;
  href?: string;
}

export interface NavSubmodule {
  id: string;
  label: string;
  description: string;
  icon: string;
  accent: string;
  routes: NavRoute[];
}

export interface NavModule {
  id: string;
  label: string;
  description: string;
  icon: string;
  accent: string;
  submodules: NavSubmodule[];
}
