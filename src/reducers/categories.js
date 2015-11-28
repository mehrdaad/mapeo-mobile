const defaultCategories = [
  {payload: 'just_testing', text: 'That scene from Lion King where Simba is shown to the animals of the jungle'},
  {payload: 'sacred_ground', text: 'Sacred Ground'},
  {payload: 'deforestation', text: 'Deforestation'},
  {payload: 'mining', text: 'Mining'},
  {payload: 'River', text: 'River'},
  {payload: 'oil_leakage', text: 'Oil Leakage'}
]

// This should be a FSA, but for now we just need a list of categories to use in the forms
export default function categories (
  state = defaultCategories, {
    type,
    payload = {},
    error
  }) { return state }
