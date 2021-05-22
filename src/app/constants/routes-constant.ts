// todo: add constants to components after files are separated into smart & dumb components . . .
export abstract class RoutesConstant {
 // Params
  static readonly RECIPE_ID: string = 'id';

  // Route roots
  static readonly RECIPES_ROUTE: string = 'recipes';

  // Routes
  static readonly RECIPES_LIST: string = RoutesConstant.RECIPES_ROUTE;
  static readonly RECIPES_DETAILS_BASE: string = RoutesConstant.RECIPES_ROUTE;
  static readonly RECIPES_DETAILS: string = RoutesConstant.RECIPES_ROUTE + '/:' + RoutesConstant.RECIPE_ID;
  static readonly RECIPES_NEW: string = RoutesConstant.RECIPES_ROUTE + '/new';
  static readonly RECIPES_EDIT_BASE: string = RoutesConstant.RECIPES_ROUTE + '/edit';
  static readonly RECIPES_EDIT: string = RoutesConstant.RECIPES_EDIT_BASE + '/:' + RoutesConstant.RECIPE_ID;

}