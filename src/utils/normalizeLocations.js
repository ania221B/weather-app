function normalizeLocations (locations) {
  if (!locations) return []
  return locations?.map(location => {
    return {
      id: Number.isInteger(location?.id) ? location.id : 0,
      name: typeof location?.name === 'string' ? location.name : '',
      country: typeof location?.country === 'string' ? location.country : '',
      latitude: typeof location?.latitude === 'number' ? location.latitude : 0,
      longitude:
        typeof location?.longitude === 'number' ? location.longitude : 0
    }
  })
}

export default normalizeLocations
