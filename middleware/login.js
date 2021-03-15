/*
public\public - показ обращений и нац. проектов
admin\2010 - показ всего





export default function ({ store, redirect, route }) {
  if (!(store.getters.isAdmin || store.getters.isPublic)) {
    return redirect('/login')
  }
  //запретить кроме  
  if (store.getters.isPublic) {
    if (!(route.fullPath.includes('obrashcheniya-grazhdan') || route.name === 'index')) {
      return redirect('/')
    }
  }
}
*/

/*
На главную
*/
export default function ({ store, redirect }) {
  !store.state.user && redirect('/login')
}
