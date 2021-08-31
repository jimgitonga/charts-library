import React from 'react'
import { Container } from './StackedAreaChartComponent.styled'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { stackedAreaChartData } from '@/data/data'

export const StackedAreaChartComponent = () => {
  const colors = ['#8800cc', '#FF0000', '#0000FF', '#00FF00']
  const keys: ('apples' | 'bananas' | 'cherries' | 'dates')[] = [
    'apples',
    'bananas',
    'cherries',
    'dates',
  ]

  return (
    <Container>
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 16 }}
        data={stackedAreaChartData}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
      />
    </Container>
  )
}
