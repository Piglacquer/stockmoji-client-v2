import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { scaleTime } from 'd3-scale'
import { utcDay } from 'd3-time'

import { ChartCanvas, Chart } from 'react-stockcharts'
import { CandlestickSeries } from 'react-stockcharts/lib/series'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils'

class CandleStickChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const xAccessor = d => new Date(d.date)
    const xExtents = [
      xAccessor(last(this.props.stockInfo.chart)),
      xAccessor(this.props.stockInfo.chart[this.props.stockInfo.chart.length - 100])
    ]
    return (
      <ChartCanvas height={400}
        ratio={1.5}
        width={window.innerWidth * 0.9}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type='svg'
        seriesName={this.props.stockInfo.company.symbol}
        data={this.props.stockInfo.chart}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}>
        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt='bottom' orient='bottom' ticks={6} />
          <YAxis axisAt='left' orient='left' ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>
    )
  }
}

CandleStickChart.propTypes = {
  type: PropTypes.oneOf(['svg', 'hybrid']).isRequired
}

CandleStickChart.defaultProps = {
  type: 'svg'
}

CandleStickChart = fitWidth(CandleStickChart)

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(CandleStickChart)
