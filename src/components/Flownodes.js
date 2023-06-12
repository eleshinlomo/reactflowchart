import React, {useCallback} from 'react';
import {Box, Typography} from '@mui/material'
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import ReactFlow, { 
    MiniMap,
    Controls,
    Background,
    useNodesState, 
    useEdgesState, 
    addEdge 
} from 'reactflow'
import 'reactflow/dist/style.css';

const Flownodes = () => {



    const initialNodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { 
            label: <Box>
            <Typography>Selection</Typography>
            <WifiTetheringErrorIcon />
            <Typography>Hotkey</Typography>
            </Box> 
        } },

        { id: '2', position: { x: 200, y: 0 }, data: { 
            label: <Box>
            <WifiTetheringErrorIcon />
            <Typography>Clipboard</Typography>
            </Box>  
        } },
        { id: '3', position: { x: 0, y: 100 }, data: { 
            label:  <Box>
             <Typography>OpenAI query</Typography>
            <WifiTetheringErrorIcon />
            <Typography>Universal action</Typography>
            </Box>  
        } },
        { id: '4', position: { x: 0, y: 200 }, data: { 
            
            label:  <Box>
            <Typography>OpenAI query</Typography>
            <WifiTetheringErrorIcon />
            <Typography>Fallback search</Typography>
            </Box>  
        } },

        { id: '5', position: { x: 0, y: 300 }, data: { 
            
            label:  <Box>
            <Typography>OpenAI</Typography>
            <WifiTetheringErrorIcon />
            <Typography>Keyword</Typography>
            </Box>  
        } },
      ];
      const initialEdges = [{ id: '1-2', source: '1', target: '2' }];


      const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (

    <div style={{ width: '100%', height: '70vh', backgroundColor: '#333333', padding: '2rem' }}>
    
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}

    >
      
    </ReactFlow>
    
  </div>
  )
}

export default Flownodes