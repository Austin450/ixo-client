import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { EmbeddedPageContent } from 'modules/Entities/CreateEntity/CreateEntityPageContent/types'
import EmbeddedContentCard from 'modules/Entities/SelectedEntity/EntityOverview/components/EmbeddedContentCard/EmbeddedContentCard'
import { connect } from 'react-redux'
import { RootState } from 'common/redux/types'

import * as entitySelectors from '../../SelectedEntity.selectors'

interface Props {
  analytics: EmbeddedPageContent[]
}

const CardContainer = styled.div`
  background: #fff;
  padding: 0.5rem 1rem;
  margin: 2.5rem 0rem;
`

const Container = styled.div`
  padding: 0rem 2rem;
`

const EntityAnalytics: React.FunctionComponent<Props> = ({ analytics }) => {
  return (
    <Container>
      {analytics.map((content, index) => {
        const { title, urls } = content

        return (
          <CardContainer key={`analytics-${index}`}>
            <EmbeddedContentCard title={title} urls={urls} />
          </CardContainer>
        )
      })}
    </Container>
  )
}

const mapStateToProps = (state: RootState): any => ({
  analytics: entitySelectors.selectEntityAnalytics(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EntityAnalytics)
