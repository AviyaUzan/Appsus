export const storageService = {
	query,
	get,
	post,
	put,
	remove,
	postMany,
	makeId,
	getIdx,
	putFirst
}

// gets all the items
function query(entityType) {
	var entities = JSON.parse(localStorage.getItem(entityType)) || []
	return Promise.resolve(entities)
}

//get an item by id
function get(entityType, entityId) {
	console.log(entityType, entityId)
	query(entityType).then(entities => console.log(entities))
	return query(entityType).then(entities =>
		entities.find(entity => entity.id === entityId)
	)
}
//get an item by id
function getIdx(entityType, entityId) {
	return query(entityType).then(entities =>
		entities.findIndex(entity => entity.id === entityId)
	)
}

//create new item
function post(entityType, newEntity) {
	newEntity.id = makeId()
	return query(entityType).then(entities => {
		entities.unshift(newEntity)
		_save(entityType, entities)
		return newEntity
	})
}

//create new items
function postMany(entityType, newEntities) {
	return query(entityType).then(entities => {
		entities.push(...newEntities)
		_save(entityType, entities)
		return entities
	})
}

//update an item
function put(entityType, updatedEntity) {
	return query(entityType).then(entities => {
		const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
		entities.splice(idx, 1, updatedEntity)
		_save(entityType, entities)
		return updatedEntity
	})
}

function putFirst(entityType, updatedEntity) {
	return query(entityType).then(entities => {
		const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
		entities.splice(idx, 1)
		entities.unshift(updatedEntity)
		console.log(entities)
		_save(entityType, entities)
		return entities
	})
}
//remove an item
function remove(entityType, entityId) {
	return query(entityType).then(entities => {
		const idx = entities.findIndex(entity => entity.id === entityId)
		entities.splice(idx, 1)
		_save(entityType, entities)
	})
}

//save to local storage
function _save(entityType, entities) {
	localStorage.setItem(entityType, JSON.stringify(entities))
}

function makeId(length = 8) {
	var text = ''
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}
