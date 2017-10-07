import React from 'react'

import { connect } from 'react-redux'

import {
  getItems,
  addItem,
  getItemForm,
  updateItemForm,
  resetItemForm,
} from 'ducks/item'

const Item = ({
  text,
}) => (
  <div>
    <p>{text}</p>
  </div>
)

const ItemForm = ({
  update,
  submit,
  value,
}) => (
  <div>
    <input
      type='text'
      onChange={update}
      value={value}
    />
    <button
      type='button'
      onClick={submit}
    >
      Add Item
    </button>
  </div>
)

const validateForm = form => form.trim().length > 0 ? true : false

const Items = ({
  items,
  itemForm,
  addItem,
  updateItemForm,
  resetItemForm,
}) => {
  const submit = () => {
    if (validateForm(itemForm)) {
      addItem({ text: itemForm })
      resetItemForm()
    } else {
      return null
    }
  }
  return (
    <div>
      <ItemForm
        update={e => updateItemForm(e.target.value)}
        submit={submit}
        value={itemForm}
      />
      {items.map(Item)}
    </div>
  )
}

const mapStateToProps = state => ({
  items: getItems(state),
  itemForm: getItemForm(state),
})

const mapDispatchToProps = ({
  addItem,
  updateItemForm,
  resetItemForm,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
