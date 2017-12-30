// @flow
import type { BreadcrumbLink } from './reducer';

export const SET_BREADCRUMBS: 'SET_BREADCRUMBS' = 'SET_BREADCRUMBS';

type SetBreadcrumbsAction = {
  type: 'SET_BREADCRUMBS',
  breadcrumbs: BreadcrumbLink[],
};

export type UIAction =
  | SetBreadcrumbsAction;

export function setBreadcrumbs(breadcrumbs: BreadcrumbLink[]) {
  return ({
    type: SET_BREADCRUMBS,
    breadcrumbs
  });
}
