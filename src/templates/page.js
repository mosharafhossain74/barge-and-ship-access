/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';


const PageContent = styled.section`
 
`;

const PageTemplate = ({ data }) => (
  <Layout>
    <PageContent className="single-post-content inner-page py-7">
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <div className="col-12">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <>
            <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
          </>

        </div>
      </div>
    </div>
    </PageContent>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_parent
    }
    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;
