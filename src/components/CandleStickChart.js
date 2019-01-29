import React, { Component } from 'react'
import { connect } from 'react-redux'
import { scaleTime } from 'd3-scale'
import { utcDay } from 'd3-time'
import { format } from 'd3-format'
import { ChartCanvas, Chart } from 'react-stockcharts'
import { CandlestickSeries, BarSeries } from 'react-stockcharts/lib/series'
import { EdgeIndicator } from 'react-stockcharts/lib/coordinates'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils'
import '../styles/css/CandleStickChart.css'

class CandleStickChart extends Component {
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
    const height = window.innerHeight * 0.4
    const candlesAppearance = {
      wickStroke: '#efb734',
      fill: function fill (d) {
        return d.close > d.open ? 'rgba(47, 153, 135, 1)' : 'rgba(168, 50, 50, 1)'
      },
      stroke: '#000000',
      candleStrokeWidth: 0,
      widthRatio: 0.8,
      opacity: 1
    }
    return (
      <ChartCanvas height={height}
        ratio={0.5}
        width={window.innerWidth * 0.5}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type='svg'
        seriesName={this.props.stockInfo.company.symbol}
        data={this.props.stockInfo.chart}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
        clamp>
        <Chart id={1} yExtents={d => [d.high, d.low - (d.low * 0.05)]}>
          <XAxis
            axisAt='bottom'
            orient='bottom'
            ticks={6}
            stroke='rgba(239, 183, 52, 0.6)' />
          <YAxis
            axisAt='right'
            orient='right'
            ticks={5}
            stroke='rgba(239, 183, 52, 0.6)' />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} {...candlesAppearance} />
          <EdgeIndicator
            itemType='last'
            orient='right'
            edgeAt='right'
            yAccessor={d => d.close}
            fill={d => (d.close > d.open ? '#6BA583' : '#FF0000')}
          />
        </Chart>
        <Chart
          id={2}
          yExtents={[d => d.volume]}
          height={100}
          origin={(w, h) => [0, h - 100]}>
          <YAxis
            axisAt='left'
            orient='left'
            ticks={3}
            tickFormat={format('.2s')}
            stroke='rgba(239, 183, 52, 0.6)' />
          <BarSeries
            yAccessor={d => d.volume}
            fill={d => (d.close > d.open ? 'rgba(47, 153, 135, 0.3)' : 'rgba(168, 50, 50, 0.3)')}
            width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>
    )
  }
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(CandleStickChart)
