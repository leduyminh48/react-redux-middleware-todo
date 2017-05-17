const CATEGORIES_ROUTE_PREFIX = '/categories';
const TODOS_ROUTE_PREFIX = '/todos';

export const ROUTES = {
  ALL_CATEGORIES: CATEGORIES_ROUTE_PREFIX,
  CATEGORY: `${CATEGORIES_ROUTE_PREFIX}/:categoryId`,
  TODO: `${TODOS_ROUTE_PREFIX}/:todoId`
};

export const getCategoryRoute = (categoryId) => `${CATEGORIES_ROUTE_PREFIX}/${categoryId}`;
export const getTodoRoute = (todoId) => `${TODOS_ROUTE_PREFIX}/${todoId}`;