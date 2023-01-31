import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveImg, setActiveSize } from '../redux/slices/fullItemSlice'
import { useNavigate } from 'react-router-dom'

export const FullItem = (items) => {
  const params = useParams()
  const dispatch = useDispatch()

  const props = items[params.id-1]
  const activeImg = useSelector(state => state.fullItem.activeImg)
  const sizes = useSelector(state => state.fullItem.sizes)
  const activeSize = useSelector(state => state.fullItem.activeSize)
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(setActiveSize(null))
    // dispatch(setActiveSize(props.colors[activeImg].sizes[0]-1))
    return
  }, [params.elementId])

  React.useEffect(() => {
    dispatch(setActiveImg(0))
    dispatch(setActiveSize(null))
    return
  }, [params.id])


  return (
    <div className="full-item">
      <div className="full-item__container _container">
        <div className="full_item__slider">
          <div className="full-item-slider__items">
            {props.colors.map((item, index) => {
              return (
              <div className={activeImg === index ? 'full-item-slider__item active' : 'full-item-slider__item'} onClick={() => {dispatch(setActiveImg(index)); navigate(`/item/${props.id}/${index}`)}} key={item.id}>
                <img src={item.images[0]} alt="" />
              </div>
              )
            })
            }
          </div>
        </div>
        <div className="full-item__active-img">
          <img src={props.colors[activeImg].images[0]} alt="" />
        </div>
        <div className="full-item__content">
          <div className="full-item__price">Цена: <span>{props.colors[activeImg].sizes.length && activeSize !== null ? +props.colors[activeImg].price + sizes[activeSize].number : 0}</span> за шт.</div>
          <div className="full-item__sizes">
            {
              sizes.map((item, index) => {
                if(!props.colors[activeImg].sizes.includes(item.id)){
                  return <div key={item.id} className="full-item__size disabled">{item.label}</div>
                }
                return (
                  <div key={item.id} onClick={() => dispatch(setActiveSize(index))} className={activeSize === index ? "full-item__size active" : "full-item__size"}>{item.label}</div>
                )
              })
            }
          </div>
          <div className="full-item__desciption">{props.colors[activeImg].description}</div>
        </div>
      </div>
    </div>
  )
}
