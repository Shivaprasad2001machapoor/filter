import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    categoryChanged,
    ratingsList,
    ratingChanged,
    titleChanged,
    filterCleared,
  } = props

  const onClickCategory = id => {
    categoryChanged(id)
  }

  const onClickRating = id => {
    ratingChanged(id)
  }

  const onSearchInput = event => {
    titleChanged(event)
  }

  const onClickClear = () => {
    filterCleared()
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search"
          onChange={onSearchInput}
        />
      </div>
      <div className="filter-container">
        <h1 className="heading">Category</h1>
        <ul className="filters">
          {categoryOptions.map(eachOption => (
            <button
              className="filter-button"
              type="button"
              onClick={() => onClickCategory(eachOption.categoryId)}
              key={eachOption.categoryId}
            >
              <p>{eachOption.name}</p>
            </button>
          ))}
        </ul>
        <h1 className="heading">Rating</h1>
        <ul className="filters">
          {ratingsList.map(eachRating => (
            <button
              type="button"
              className="rating-button"
              onClick={() => onClickRating(eachRating.ratingId)}
              key={eachRating.ratingId}
            >
              <div className="img-container">
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="img-rating"
                />
                <p className="desc">& Up</p>
              </div>
            </button>
          ))}
        </ul>
        <button type="button" className="clear-filter" onClick={onClickClear}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
