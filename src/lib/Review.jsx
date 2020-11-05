import React from "react"
import styled from "styled-components"
import { Card, Avatar, Typography } from "@material-ui/core"
import { Rating, Button } from "lib"

const Cursive = styled.h6`
  font-style: italic;
  font-weight: 300;
  color: #2d2d2d;
  margin: 0;
  font-size: 18px;
`

const FloatRight = styled.div`
  float: right;
`

const Main = styled.div`
  padding-top: 20px;
`

export const Review = ({
  avatar,
  name,
  rating,
  since,
  date,
  text,
  onChange,
  ...props
}) => {
  return (
    <Card elevation={4} {...props} style={{ display: "flex", padding: "36px" }}>
      <Avatar
        src={avatar}
        alt={name}
        style={{
          width: "124px",
          height: "124px",
          marginRight: "30px",
        }}
      />
      <div>
        <FloatRight>
          <Rating
            disabled
            precision={0.5}
            defaultValue={rating}
            style={{ float: "right" }}
          />
          <Cursive>{date}</Cursive>
        </FloatRight>
        <Main>
          <Typography variant="h5" color="textPrimary">
            {name}
          </Typography>
          <Cursive>Host since {date}</Cursive>
          <Typography
            variant="body1"
            color="textPrimary"
            style={{ paddingTop: "24px" }}
          >
            {text}
          </Typography>
        </Main>
        <FloatRight>
          <Button
            style={{
              height: "46px",
              whiteSpace: "nowrap",
              marginTop: "12px",
              padding: "0 30px",
            }}
            variant="outlined"
            color="primary"
          >
            Read more
          </Button>
        </FloatRight>
      </div>
    </Card>
  )
}
