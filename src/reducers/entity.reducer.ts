import { Entity } from "../modals/Entity";

export interface EntityState<T extends Entity = any> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number;
}

export const getIds = (entities: Entity[]) => entities.map((e) => e.id);

export const select = (state: EntityState, id: number) => ({
  ...state,
  selectedId: id,
});

export const addOne = (state: EntityState, entity: Entity) => {
  //return { ...state, [entity.id]: entity };
  return { ...state, byId: { ...state.byId, [entity.id]: entity } };
};

export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0) return state;

  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});
  return {
    ...state,
    byId: { ...state.byId, ...entityMap },
  };
};
