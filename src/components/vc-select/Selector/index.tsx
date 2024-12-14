import { FunctionType, StringType } from '@/components/_utils/type'
import { defineComponent } from 'vue'
import SingleSelector from './SingleSelector'
import MultipleSelector from './MultipleSelector'

const Selector = defineComponent({
  name: 'Selector',
  props: {
    mode: StringType<'single' | 'multiple'>('single'),
    prefixCls: String,
    values: [],

    // open
    onToggleOpen: FunctionType<(open?: boolean) => void>(),

    // ref
    domRef: Function,
  },
  setup(props) {
    const handleClick = () => {
      props.onToggleOpen()
    }

    return () => {
      const { mode, prefixCls, domRef } = props

      const selectNode = mode === 'single' ? <SingleSelector {...props} /> : <MultipleSelector />

      return (
        <div ref={domRef} onClick={handleClick} class={`${prefixCls}-selector`}>
          {selectNode}
        </div>
      )
    }
  },
})

export default Selector
