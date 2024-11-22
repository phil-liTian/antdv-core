import type { App } from 'vue'
import Checkbox from './Checkbox'
import CheckboxGroup from './Group'

Checkbox.group = CheckboxGroup

Checkbox.install = (app: App) => {
  app.component(Checkbox.name!, Checkbox)
  app.component(CheckboxGroup.name!, CheckboxGroup)
  return app
}

export default Checkbox